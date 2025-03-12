mvn clean compile -DbuildType=dev;
mv target/game target/Reveal;
cp src/main/js/settings.json target/Reveal/;
