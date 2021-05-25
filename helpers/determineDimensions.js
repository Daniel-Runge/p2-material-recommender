function determineDimensions(user) {
  userpoles = {};

  if (user.perception < 0) {
    userpoles.Sensing = -1 * user.perception;
  } else {
    userpoles.Intuitive = user.perception;
  }

  if (user.input < 0) {
    userpoles.Visual = -1 * user.input;
  } else {
    userpoles.Verbal = user.input;
  }

  if (user.processing < 0) {
    userpoles.Active = -1 * user.processing;
  } else {
    userpoles.Reflective = user.processing;
  }

  if (user.understanding < 0) {
    userpoles.Sequential = -1 * user.understanding;
  } else {
    userpoles.Global = user.understanding;
  }

  return userpoles;
}

module.exports = { determineDimensions };
