export const pathGenerator = (iscurve, isNewIndent, source, destination) => {
  // return `M ${ source.y},${source.x}
  //     V${destination.x}H${destination.y};  `
  if (isNewIndent) {
    return `M ${source.y + 160} ${source.x}
    H  ${source.y + 200},
    V  ${destination.x},
    H  ${destination.y - 15}`;
  }else if (!iscurve) {
    return `
    M ${source.y} ${source.x}
     C ${(source.y + destination.y) / 2} ${source.x},
       ${(source.y + destination.y) / 2} ${destination.x},
       ${destination.y} ${destination.x}`;
  }
  else {
    return `M ${source.y} ${source.x}
  H  ${source.y},
  V  ${destination.x},
  H  ${destination.y}`;
  }
};

export const getTranslation = transform => {
  const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  g.setAttributeNS(null, 'transform', transform);
  const matrix = g.transform.baseVal.consolidate().matrix;
  return [matrix.e, matrix.f];
};