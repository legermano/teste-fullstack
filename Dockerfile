FROM php:8.0-fpm-alpine

# install pdo pdo_mysql PHP extensions
RUN docker-php-ext-install pdo pdo_mysql

# install git, nodejs, npm, and openssh-client
RUN apk add --update --no-cache \
    -X http://dl-cdn.alpinelinux.org/alpine/edge/main \
    git \
    nodejs \
    npm

# install composer
RUN wget https://getcomposer.org/composer-stable.phar -O /usr/local/bin/composer && chmod +x /usr/local/bin/composer