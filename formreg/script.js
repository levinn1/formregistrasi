//utk validasi form
function validateForm() {
    const form = document.getElementById("registration-form");
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const birth = document.getElementById("birth").value;
    const gender = document.getElementById("gender").value;
    const program = document.getElementById("program").value;
    const address = document.getElementById("address").value;
    const phone = document.getElementById("phone").value;
    const motherName = document.getElementById("mother_name").value;
    const fatherName = document.getElementById("father_name").value;
    const photo = document.getElementById("photo").files[0]; 
  
    //klau ad bagian tdk terisi mncl alert please fill
    if (name === "" || email === "" || birth === "" || gender === "" || program === "" || address === "" || phone === "" || motherName === "" || fatherName === "") {
      alert("Please fill this part!");
      return false; // spya klau di ats terdeteksi tdk diisi form tdk bsa disubmit
    }
   
    //tmpt simpan data pas session berlangsung. jdi klau page ditutup data jg hlg
    sessionStorage.setItem("submittedData", JSON.stringify({
      name,
      email,
      birth,
      gender,
      program,
      address,
      phone,
      motherName,
      fatherName
    }));
  
    //print data yg tersimpan
    const submittedData = document.getElementById("submitted-data");
    submittedData.innerHTML = `<h3>Submitted Information:</h3>
    <p>Name: ${name}</p>
    <p>Email: ${email}</p>
    <p>Date of Birth: ${birth}</p>
    <p>Gender: ${gender}</p>
    <p>Program of Interest: ${program}</p>
    <p>Address: ${address}</p>
    <p>Phone Number: ${phone}</p>
    <p>Mother's Name: ${motherName}</p>
    <p>Father's Name: ${fatherName}</p>`;
  
    return true; 
  }
  
  //spya klau page refresh/form disubmit data ttp mncul/tdk hilang
  window.onload = function() {
    const storedData = sessionStorage.getItem("submittedData");
    if (storedData) {
      const data = JSON.parse(storedData);
      const submittedData = document.getElementById("submitted-data");
      submittedData.innerHTML = `<h3>Successfuly Registered!</h3>`;
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          submittedData.innerHTML += `<p>${key}: ${data[key]}</p>`;
        }
      }
    }
  };
  
  //eventlistener gunany klau user pncet submit, akan ke divalidasi melalui validateForm
  const form = document.getElementById("registration-form");
  form.addEventListener("submit", validateForm);
  