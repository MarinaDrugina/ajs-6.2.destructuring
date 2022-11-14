export default function getAttack(object) {
  const attack = [];

  object.special.forEach((item) => {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = item;
    attack.push({
      id, name, icon, description,
    });
  });

  return attack;
}
