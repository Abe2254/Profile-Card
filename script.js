function updateTime() {
  const utcTimeElement = document.getElementById('utc-time');
  const now = new Date();

  // Format the time as HH:MM (hours and minutes only)
  const hours = String(now.getUTCHours()).padStart(2, '0'); // Get UTC hours
  const minutes = String(now.getUTCMinutes()).padStart(2, '0'); // Get UTC minutes
  const utcTime = `${hours}:${minutes}`; // Combine hours and minutes

  // Update the element with the formatted time
  utcTimeElement.textContent = ` UTC Time: ${utcTime}`;
}

// Update time every second
setInterval(updateTime, 1000);

// Initial call to display the time immediately
updateTime();
// Get the profile picture and overlay elements
const profilePic = document.getElementById('profile-picture');
const overlay = document.createElement('div');
overlay.classList.add('overlay');
document.body.appendChild(overlay);

// Adding an click event listener to the profile picture
profilePic.addEventListener('click', () => {
  // Toggling the "enlarged" class on the image
  profilePic.classList.toggle('enlarged');

  // Show or hide the overlay
  if (profilePic.classList.contains('enlarged')) {
    overlay.style.display = 'block';
  } else {
    overlay.style.display = 'none';
  }
});

// Close the enlarged image when clicking outside
overlay.addEventListener('click', () => {
  profilePic.classList.remove('enlarged');
  overlay.style.display = 'none';
});
