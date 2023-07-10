export const level1Mappings = {
  0: () => [
    sprite("grass-tileset", { anim: "tl" }),
    area(),
    body({ isStatic: true }),
    offscreen(),
  ],
  1: () => [
    sprite("grass-tileset", { anim: "tm" }),
    area(),
    body({ isStatic: true }),
    offscreen(),
  ],
  2: () => [
    sprite("grass-tileset", { anim: "tr" }),
    area(),
    body({ isStatic: true }),
    offscreen(),
  ],
  3: () => [
    sprite("grass-tileset", { anim: "ml" }),
    area(),
    body({ isStatic: true }),
    offscreen(),
  ],
  4: () => [sprite("grass-tileset", { anim: "mm" }), offscreen()],
  5: () => [
    sprite("grass-tileset", { anim: "mr" }),
    area(),
    body({ isStatic: true }),
    offscreen(),
  ],
  6: () => [sprite("grass-tileset", { anim: "ml-2" }), offscreen()],
  7: () => [sprite("grass-tileset", { anim: "mm-2" }), offscreen()],
  8: () => [sprite("grass-tileset", { anim: "mr-2" }), offscreen()],
  9: () => [
    sprite("grass-oneway-tileset", { anim: "tl" }),
    area({ shape: new Rect(vec2(0), 16, 3) }),
    "passthrough",
    body({ isStatic: true }),
    offscreen(),
  ],
  a: () => [
    sprite("grass-oneway-tileset", { anim: "tm" }),
    area({ shape: new Rect(vec2(0), 16, 3) }),
    "passthrough",
    body({ isStatic: true }),
    offscreen(),
  ],
  b: () => [
    sprite("grass-oneway-tileset", { anim: "tr" }),
    area({ shape: new Rect(vec2(0), 16, 3) }),
    "passthrough",
    body({ isStatic: true }),
    offscreen(),
  ],
  c: () => [sprite("grass-oneway-tileset", { anim: "ml" }), offscreen()],
  d: () => [sprite("grass-oneway-tileset", { anim: "mm" }), offscreen()],
  e: () => [sprite("grass-oneway-tileset", { anim: "mr" }), offscreen()],
  o: () => [sprite("bridge"), area(), body({ isStatic: true }), offscreen()],
  "@": () => [sprite("coin"), area(), "coin", offscreen()],
};

export const level1Layout = [
  [
    "                              @                                                             ",
    "                                                                                            ",
    "                             9aab                                                           ",
    "                             cdde                                                           ",
    "                             cdde                                                           ",
    "                             cdde                                                           ",
    "                             cdde                                                           ",
    "                             cdde                                                           ",
    "                             cdde                                                           ",
    "                             cdde                                                           ",
    "                                                                                            ",
    "                                                                                            ",
    "                                                                                            ",
  ],
  [
    "                                                                                                ",
    "                                                                                                ",
    "                                 @            @@                                                ",
    "                                                                                 @@             ",
    "                           @   9aab          9aab                      @                        ",
    "                               cdde          cdde                          9aaaboooo9aaab       ",
    "                          9aab cdde          cdde 9aab               9aab  cddde    cddde       ",
    "                          cdde cdde          cdde cdde          @    cdde  cddde    cddde    @@ ",
    "                    t     cdde cdde          cdde cdde               cdde  cddde    cddde       ",
    "                   011111111111111111112oo011111111111111111112oooo0111111111112    011111111112",
    "                   344444444444444444445  344444444444444444445    3444444444445    344444444445",
    "                   677777777777777777778  677777777777777777778    6777777777778    677777777778",
  ],
  [
    "                                                                                                ",
    "                                                                                                ",
    "                                                                                                ",
    "                                                                                                ",
    "                                                                                                ",
    "                                                                                                ",
    "                                                                                                ",
    "                                                   @@                        @@      @@ 9aab    ",
    "                                                                                        cdde    ",
    "                                                                                                ",
    "                                                                                                ",
    "                                                                                                ",
  ],
];
