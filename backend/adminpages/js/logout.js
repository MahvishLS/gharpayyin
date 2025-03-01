document.getElementById("logoutBtn").addEventListener("click", async () => {
    try {
      const response = await fetch("/api/users/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", 
      });
  
      if (response.ok) {
        localStorage.removeItem("userId");
        localStorage.removeItem("token"); 
        sessionStorage.removeItem("token");
        window.location.href = "/admin"; 
      } else {
        const error = await response.json();
        alert(error.message || "Failed to log out.");
      }
    } catch (err) {
      console.error("Error during logout:", err);
      alert("An error occurred while logging out.");
    }
  });
  