define(require => {
    const PIXI = require("com/pixijs/pixi");
    const app = require("skbJet/componentManchester/standardIW/app");

    const DEG_PER_RAD = Math.PI/180; //babel won't play nice so no polyfills :-(

    class Wave {
        constructor(verticesX, verticesY) {
            let mesh = new PIXI.mesh.Plane(PIXI.Texture.fromFrame("oceanFill0"), verticesX, verticesY);
            let vertexArray = [];

            let points = Array.from(mesh.vertices);
            let y0 = mesh.vertices[1]; //first Y coordinate
            let row = [];
            while(points.length > 0) {
                let point = new PIXI.Point(points.shift(), points.shift());
                if(point.y != y0) {
                    //new row
                    vertexArray.push(row);
                    row = [point];
                    y0 = point.y;
                } else {
                    row.push(point);
                }
            }
            vertexArray.push(row);

            this._beginState = vertexArray[0].map(function(v){return v.y;});
            this._endState = vertexArray[0].map(function(v){return v.y;});
            this._progress = 0;
            this._g = null;
            this._container = null;

            this.mesh = mesh;
            this.vertexArray = vertexArray;
        }

        static fromContainer(container) {
            const wave = new Wave(64, 3);
            container.addChild(wave.mesh);
            wave._container = container;
            wave.stretchX(app.screen.width - container.x, container.x);
            wave.stretchY(app.screen.height - container.y, container.y);
            wave.applyVertices();
            wave._beginState = wave.tilt(-6.4 * DEG_PER_RAD);
            wave._endState = wave.sine(71, 860, 117);
            wave.progress = 0;
            return wave;
        }

        get progress() {
            return this._progress;
        }

        set progress(p) {
            this._progress = Math.max(0, Math.min(p, 1));
            for(let col = 0; col < this.mesh.verticesX; col++) {
                this.vertexArray[0][col].y = this._beginState[col] + ((this._endState[col] - this._beginState[col]) * this._progress);
            }
            this.applyVertices();
        }

        set beginState(topRow) {
            this._beginState = topRow;
            this.progress = this._progress;
        }

        set endState(topRow) {
            this._endState = topRow;
            this.progress = this._progress;
        }

        tilt(rotation) {
            let topRow = [];
            for(let col = 0; col < this.mesh.verticesX; col++) {
                topRow.push(Math.tan(rotation) * this.vertexArray[0][col].x);
            }
            return topRow;
        }

        sine(amplitude, wavelength, offset) {
            let tau = (Math.PI * 2);
            let angF = tau / wavelength;
            let phase = offset / wavelength * tau;

            let topRow = [];
            for(let col = 0; col < this.mesh.verticesX; col++) {
                topRow.push(amplitude * Math.sin(angF * this.vertexArray[0][col].x + phase));
            }
            return topRow;
        }

        stretchY(bottom, top) {
            top = top || 0;
            let row, col;
            let stepY = (bottom - top) / (this.mesh.verticesY - 1);
            for(row = 0; row < this.mesh.verticesY; row++) {
                for(col = 0; col < this.mesh.verticesX; col++) {
                    this.vertexArray[row][col].y = top + stepY * row;
                }
            }
        }

        stretchX(right, left) {
            left = left || 0;
            let row, col;
            let stepX = (right - left) / (this.mesh.verticesX - 1);
            for(row = 0; row < this.mesh.verticesY; row++) {
                for(col = 0; col < this.mesh.verticesX; col++) {
                    this.vertexArray[row][col].x = left + stepX * col;
                }
            }
        }

        applyVertices() {
            let row, col, i = 0;
            for(row = 0; row < this.mesh.verticesY; row++) {
                for(col = 0; col < this.mesh.verticesX; col++) {
                    this.mesh.vertices[i] = this.vertexArray[row][col].x;
                    i++;
                    this.mesh.vertices[i] = this.vertexArray[row][col].y;
                    i++;
                }
            }
        }

        renderPoints() {
            if(this._g === null) {
                //Setup graphics drawing for points (renderPoints)
                let g = new PIXI.Graphics();
                g.x = this.mesh.x;
                g.y = this.mesh.y;
                this._container.addChild(g);
                this._g = g;
            }

            let col, row;
            this._g.clear();

            this._g.lineStyle(2, 0xffc2c2);
            for(row = 0; row < this.mesh.verticesY; row++) {
                this._g.moveTo(this.vertexArray[row][0].x, this.vertexArray[row][0].y);
                for(col = 0; col < this.mesh.verticesX; col++) {
                    this._g.lineTo(this.vertexArray[row][col].x, this.vertexArray[row][col].y);
                }
            }
            for(col = 0; col < this.vertexArray[0].length; col++) {
                this._g.moveTo(this.vertexArray[0][col].x, this.vertexArray[0][col].y);
                for(row = this._0; row < this.mesh.verticesY; row++) {
                    this._g.lineTo(this.vertexArray[row][col].x, this.vertexArray[row][col].y);
                }
            }
            for(row = 0; row < this.mesh.verticesY; row++) {
                for(col = 0; col < this.mesh.verticesX; col++) {
                    this._g.beginFill(0xff0022);
                    this._g.drawCircle(this.vertexArray[row][col].x, this.vertexArray[row][col].y, 10);
                    this._g.endFill();
                }
            }
        }
    }

    return Wave;
});