// duplicate declaration (self-hoist)

function atob() {
  console.log("native atob");
}

console.log(typeof atob); // function

if (typeof atob === "undefined") {
  // In some browsers and for some special types of global built-in variables (often called "host objects"), this duplicate declaration may throw an error.
  var atob = function() {
    console.log("polyfill atob");
  };
}

atob(); // native atob
