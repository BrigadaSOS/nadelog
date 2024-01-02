FROM openjdk:17-jdk-alpine as build
WORKDIR /workspace/app

COPY gradle gradle
COPY build.gradle settings.gradle gradlew ./
COPY src src

RUN ./gradlew build -x test

FROM openjdk:17-jdk-alpine
COPY --from=build /workspace/app/build/libs/nadelog-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java","-jar","app.jar"]
