
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title', 'Login')</title>
    <link rel="stylesheet" href="{{ asset('oneui/css/oneui.min.css') }}">
    <!-- Add any other stylesheets your template needs -->
</head>
<body>
    <div id="page-container">
        @yield('content')
    </div>
    <script src="{{ asset('oneui/js/oneui.core.min.js') }}"></script>
    <script src="{{ asset('oneui/js/oneui.app.min.js') }}"></script>
    <!-- Add any other scripts your template needs -->
</body>
</html>