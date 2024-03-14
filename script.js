const SpecialCalculator = () => {
  strength = document.getElementById('Strength').value;
  perception = document.getElementById('Perception').value;
  endurance = document.getElementById('Endurance').value;
  charisma = document.getElementById('Charisma').value;
  intellegence = document.getElementById('Intellegence').value;
  agility = document.getElementById('Agility').value;

  document.getElementById("Skill_Strength").innerHTML = (strength * 2) + 6;
  document.getElementsByClassName("Skill_Perception")[0].innerHTML = (perception * 2) + 6;
  document.getElementsByClassName("Skill_Perception")[1].innerHTML = (perception * 2) + 6;
  document.getElementsByClassName("Skill_Perception")[2].innerHTML = (perception * 2) + 6;
  document.getElementsByClassName("Skill_Endurance")[0].innerHTML = (endurance * 2) + 6;
  document.getElementsByClassName("Skill_Endurance")[1].innerHTML = (endurance * 2) + 6;
  document.getElementsByClassName("Skill_Charisma")[0].innerHTML = (charisma * 2) + 6;
  document.getElementsByClassName("Skill_Charisma")[1].innerHTML = (charisma * 2) + 6;
  document.getElementsByClassName("Skill_Intelligence")[0].innerHTML = (intellegence * 2) + 6;
  document.getElementsByClassName("Skill_Intelligence")[1].innerHTML = (intellegence * 2) + 6;
  document.getElementsByClassName("Skill_Intelligence")[2].innerHTML = (intellegence * 2) + 6;
  document.getElementsByClassName("Skill_Agility")[0].innerHTML = (agility * 2) + 6;
  document.getElementsByClassName("Skill_Agility")[1].innerHTML = (agility * 2) + 6;
 }