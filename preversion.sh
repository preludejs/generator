npm test
rm -Rf cjs
npx tsc -p tsconfig.cjs.json
echo '{"module":"commonjs"}' > cjs/package.json
