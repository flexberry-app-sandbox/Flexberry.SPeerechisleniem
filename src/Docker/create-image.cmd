docker build --no-cache -f SQL\Dockerfile.PostgreSql -t speerechisleniem/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t speerechisleniem/app ../..
