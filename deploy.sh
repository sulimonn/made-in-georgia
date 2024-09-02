echo 'Building...'
npm run build

echo 'Deploying to server...'
scp -r build/* root@85.193.87.153:/root/mdg/build/

echo 'Done!'

