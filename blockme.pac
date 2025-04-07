function FindProxyForURL(url, host) {
    if (
      shExpMatch(url, "*linkedin.com/in/jagadeeesh-mummana*") ||
      shExpMatch(url, "*github.com/Mummanajagadeesh*") ||
      shExpMatch(url, "*mummanajagadeesh.github.io*") ||
      shExpMatch(url, "*youtube.com/@M_J_9_7*")
    ) {
      return "PROXY 127.0.0.1:9999"; // Blocks those URLs
    }
    return "DIRECT"; // Everything else loads normally
  }
  