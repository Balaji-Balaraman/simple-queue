#FROM openjdk:11-jdk-alpine
#FROM openjdk:11-jdk
FROM eclipse-temurin:17-jdk-alpine
VOLUME /tmp
ARG JAVA_OPTS
ENV JAVA_OPTS=$JAVA_OPTS
COPY target/simple-queue-backend-1.0-SNAPSHOT.jar simplequeuebackend.jar
EXPOSE 8088
ENTRYPOINT exec java $JAVA_OPTS -jar simplequeuebackend.jar
# For Spring-Boot project, use the entrypoint below to reduce Tomcat startup time.
#ENTRYPOINT exec java $JAVA_OPTS -Djava.security.egd=file:/dev/./urandom -jar simplequeuebackend.jar
