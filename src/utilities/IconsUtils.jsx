function importAll(r) {
  let images = {};
  for (const path in r) {
    const key = path.replace('./', '');
    images[key] = r[path];
  }
  return images;
}

export function weatherIcon(imageName) {
  const allWeatherIcons = importAll(
    import.meta.glob('../assets/icons/*.png', { eager: true })
  );

  const iconsKeys = Object.keys(allWeatherIcons);

  const iconsValues = Object.values(allWeatherIcons);
  const iconIndex = iconsKeys.indexOf(imageName);

  return iconsValues[iconIndex];
}