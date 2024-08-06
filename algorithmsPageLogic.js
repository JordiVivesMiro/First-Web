function getQueryParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }

  const ubi = "";
  const message = getQueryParameter('message');
  if (message) {
    ubi = decodeURIComponent(message);
  } else {
    ubi = '';
  }
