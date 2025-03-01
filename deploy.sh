echo 'Building...'
npm run build

echo 'Deploying to server...'
scp -r build/* root@79.174.93.203:/var/www/html

echo 'Done!'

