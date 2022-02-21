 const names = [
    "Drizzt",
    "Elminster",
    "Khelben",
    "Bruenor",
    "Catti-Brie",
    "Manshoon",
    "Volo",
    "Xanathar",
    "Azoun",
    "Sarevok",
    "Jon Irenicus",
    "Gorion",
    "Lady Aribelle",
    "Doktor Skummel",
    "Esben Dillerspade",
    "Eberhardt Analtrumpet"
 ];

export function generateName() {
    return names[Math.floor(Math.random() * names.length - 1)];
}