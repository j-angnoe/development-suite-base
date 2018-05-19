
# yarn install

mkdir -p bin/;

if [ ! hash yarn 2>/dev/null ]; then
	echo "Installing yarn..";
	npm install -g yarn;
fi;

if [ ! -f stuff/bin/selenium-server-standalone-3.9.1.jar ]; then
	wget http://selenium-release.storage.googleapis.com/3.9/selenium-server-standalone-3.9.1.jar -P ./stuff/bin/
fi

#############
# Clone repos
#############


###########################
# Create docker environment
###########################

docker-compose create;


echo "If you're ready, run:"
echo "docker-compose up"
echo "To test the setup run:"
echo "yarn test:devsuite-ready"

#yarn test:devsuite-ready;

echo "Installation complete.";
