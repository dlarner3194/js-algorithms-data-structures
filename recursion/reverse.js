function reverse(s) {
  if (s === "") return "";
  return reverse(s.substr(1)) + s.charAt(0);
}

console.log(reverse("awesome")); // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'
