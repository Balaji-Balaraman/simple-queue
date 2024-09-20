#FROM openjdk:11-jdk-alpine
#FROM openjdk:11-jdk

# FROM eclipse-temurin:17-jdk-alpine
# VOLUME /tmp
# ARG JAVA_OPTS
# ENV JAVA_OPTS=$JAVA_OPTS
# COPY target/simple-queue-backend-1.0-SNAPSHOT.jar simplequeuebackend.jar
# EXPOSE 8088
# ENTRYPOINT exec java $JAVA_OPTS -jar simplequeuebackend.jar

# Build stage
FROM maven:3.8.4-openjdk-17 AS build
WORKDIR /app

# Copy the project files to the container
COPY . .

# Build the project and obfuscate it using ProGuard
RUN mvn clean package proguard:proguard

# Run stage
FROM eclipse-temurin:17-jdk-alpine
VOLUME /tmp

# ARG for JAVA_OPTS
ARG JAVA_OPTS
ENV JAVA_OPTS=$JAVA_OPTS

# Use a non-root user for security
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

# Copy the obfuscated JAR file from the build stage
COPY --from=build /app/target/simple-queue-backend-1.0-SNAPSHOT-obfuscated.jar /app/simplequeuebackend.jar

# Expose the application's port
EXPOSE 8088

# Run the obfuscated JAR file
ENTRYPOINT exec java $JAVA_OPTS -jar /app/simplequeuebackend.jar


# For Spring-Boot project, use the entrypoint below to reduce Tomcat startup time.
#ENTRYPOINT exec java $JAVA_OPTS -Djava.security.egd=file:/dev/./urandom -jar simplequeuebackend.jar
