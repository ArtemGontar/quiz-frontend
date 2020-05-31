FROM node:11.6.0-alpine AS builder
COPY . ./quiz-frontend
WORKDIR /quiz-frontend
RUN npm i
RUN $(npm bin)/ng build

FROM nginx:1.15.8-alpine
COPY --from=builder /quiz-frontend/dist/quiz-frontend/ /usr/share/nginx/html