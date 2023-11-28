docker build --no-cache -f SQL\Dockerfile.PostgreSql -t speerechisleniem-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t speerechisleniem-java/app ../../..
