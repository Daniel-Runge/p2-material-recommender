function formatMaterials(materials) {
  formattedMaterials = materials.map((element) => {
    formattedMaterial = {
      MaterialID: element.MaterialID,
      MaterialName: element.MaterialName,
      MaterialDescription: element.MaterialDescription,
      Sensing:
        element.SensingLike / (element.SensingLike + element.SensingDislike),
      Intuitive:
        element.IntuitiveLike /
        (element.IntuitiveLike + element.IntuitiveDislike),
      Visual: element.VisualLike / (element.VisualLike + element.VisualDislike),
      Verbal: element.VerbalLike / (element.VerbalLike + element.VerbalDislike),
      Active: element.ActiveLike / (element.ActiveLike + element.ActiveDislike),
      Reflective:
        element.ReflectiveLike /
        (element.ReflectiveLike + element.ReflectiveDislike),
      Sequential:
        element.SequentialLike /
        (element.SequentialLike + element.SequentialDislike),
      Global: element.GlobalLike / (element.GlobalLike + element.GlobalDislike),
    };

    return formattedMaterial;
  });
  return formattedMaterials;
}

module.exports = {
  formatMaterials,
};
