// Hent kolonneindhold fra serveren
fetch('/api/columns')
  .then(response => response.json())
  .then(data => {
    const container = document.querySelector('.container');
    container.innerHTML = ''; // Ryd tidligere kolonner

    data.forEach(column => {
      const colDiv = document.createElement('div');
      colDiv.classList.add('column');

      const header = document.createElement('h2');
      header.textContent = column.name;
      colDiv.appendChild(header);

      column.content.forEach(item => {
        if (item.endsWith('.mp4')) {
          const video = document.createElement('video');
          video.src = item;
          video.controls = true;
          video.classList.add('video');
          colDiv.appendChild(video);
        } else {
          const img = document.createElement('img');
          img.src = item;
          img.classList.add('image');
          colDiv.appendChild(img);
        }
      });

      const textarea = document.createElement('textarea');
      textarea.placeholder = 'Skriv en kommentar...';
      colDiv.appendChild(textarea);

      const button = document.createElement('button');
      button.textContent = 'Kommentér';
      colDiv.appendChild(button);

      container.appendChild(colDiv);
    });
  });
