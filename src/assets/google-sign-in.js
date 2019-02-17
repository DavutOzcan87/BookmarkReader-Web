


function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log("profile" , profile);
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  let googleProfile = {
    id:profile.getId(),
    name:profile.getGivenName(),
    email:profile.getEmail(),
    imageUrl:profile.getImageUrl(),
    surname:profile.getFamilyName()
  };
  localStorage.setItem("googleProfile" , JSON.stringify(googleProfile));
  console.log("location" , window.location);
  window.location.assign("/list-sites");
}
