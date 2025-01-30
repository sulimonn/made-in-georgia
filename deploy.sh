echo 'Building...'
npm run build

echo 'Deploying to server...'
scp -r build/* root@79.174.95.81:/var/www/html

echo 'Done!'

