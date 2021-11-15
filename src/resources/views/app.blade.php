<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Link Shortner</title>

    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
    <link type="text/css" rel="stylesheet" href="{{ asset('css/app.css') }}">
</head>
<body>
    <div id="app">
        <nav id="app-navbar" class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
              <router-link class="navbar-brand" :to="{name: 'user.index'}">Link Shortner</router-link>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <router-link class="nav-link" :to="{name: 'user.page', params: {username: $store.state.user.username}}">View user page</router-link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        <router-view></router-view>
    </div>
    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
