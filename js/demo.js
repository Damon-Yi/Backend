(function() {
    $("#select2-tags").select2({
        tags: ["today", "tomorrow", "toyota"],
        tokenSeparators: [",", " "],
        placeholder: "Type your tag here... "
    });
});