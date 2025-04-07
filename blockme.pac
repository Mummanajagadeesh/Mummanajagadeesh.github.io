function FindProxyForURL(url, host) {
    url = url.toLowerCase();
  
    if (
      shExpMatch(url, "*linkedin.com/in/jagadeeesh-mummana*") ||
      shExpMatch(url, "*github.com/mummanajagadeesh") ||
      shExpMatch(url, "*mummanajagadeesh.github.io*") ||
      shExpMatch(url, "*youtube.com/@m_j_9_7*")
    ) {
      return "PROXY 127.0.0.1:9999";
    }
  
    return "DIRECT";
  }
  