const myFunction = () => {
  strength = document.getElementById('Strength').value;
  perception = document.getElementById('Perception').value;
  endurance = document.getElementById('Endurance').value;
  charisma = document.getElementById('Charisma').value;
  intellegence = document.getElementById('Intellegence').value;
  agility = document.getElementById('Agility').value;

  document.getElementById("Skill_Strength").innerHTML = (strength * 2) + 6;
  document.getElementById("Skill_Perception").innerHTML = (perception * 2) + 6;
  document.getElementById("Skill_Endurance").innerHTML = (endurance * 2) + 6;
  document.getElementById("Skill_Charisma").innerHTML = (charisma * 2) + 6;
  document.getElementById("Skill_Intelligence").innerHTML = (intellegence * 2) + 6;
  document.getElementById("Skill_Agility").innerHTML = (agility * 2) + 6;
 }