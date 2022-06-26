document.querySelector('.download-button').onclick = () => {
  document.querySelector('.progress-button').classList.add('in-progress');
}

const simulateDownload = (progress) => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve(progress + 1);
      }, 50);
  }).then(res => res);
};

document.querySelector('.download-button').onclick = () => {
  document.querySelector('.progress-button').classList.add('in-progress');

  const documentStyles = document.documentElement.style;
  const percentage = document.querySelector('.percentage');

  (async () => {
      let progress = 0;

      while (progress < 100) {
          progress = await simulateDownload(progress);

          if (progress % 5 === 0) {
              documentStyles.setProperty('--progress', `${progress}%`);
          }

          percentage.innerText = `${progress}%`;
      }
  })();  
}

