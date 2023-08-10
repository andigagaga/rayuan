document.addEventListener("DOMContentLoaded", function() {
    const acceptButton = document.querySelector(".accept-button");
    const rejectButton = document.querySelector(".reject-button");
    
    acceptButton.addEventListener("click", function() {
      alert("Terima kasih atas jawaban positif Anda! Saya sangat senang.");
    });
    
    rejectButton.addEventListener("click", function() {
      alert("Tidak masalah, saya menghormati keputusan Anda. Tetap semangat!");
    });
  });
  
  
  