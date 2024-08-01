var js={
    "error": {
        "code": "VALIDATION_ERROR",
        "description": "'Bearer' does not match '^(?i)Bearer [A-Za-z0-9\\\\-\\\\_]{128}$'",
        "field": "Authorization",
        "instance": "Bearer"
    }
}

var str=JSON.parse(js);

alert(str);