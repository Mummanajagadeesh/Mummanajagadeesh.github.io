function FindProxyForURL(url, host) {
    url = url.toLowerCase();
  
    if (
      url.indexOf("linkedin.com/in/jagadeeesh-mummana") !== -1 ||
      url.indexOf("github.com/mummanajagadeesh") !== -1 ||
      url.indexOf("mummanajagadeesh.github.io") !== -1 ||
      url.indexOf("youtube.com/@m_j_9_7") !== -1
    ) {
      return "PROXY 127.0.0.1:9999";  // Fake proxy → blocks it
    }
  
    return "DIRECT";  // Everything else is allowed
  }
  