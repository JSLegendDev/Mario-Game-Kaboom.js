export const level1Mappings = {
    0: () => [sprite('grass-tileset', {anim: 'tl'}), area(), body({isStatic: true})],
    1: () => [sprite('grass-tileset', {anim: 'tm'}), area(), body({isStatic: true})],
    2: () => [sprite('grass-tileset', {anim: 'tr'}), area(), body({isStatic: true})],
    3: () => [sprite('grass-tileset', {anim: 'ml'}), area(), body({isStatic: true})],
    4: () => [sprite('grass-tileset', {anim: 'mm'})],
    5: () => [sprite('grass-tileset', {anim: 'mr'}), area(), body({isStatic: true})],
    6: () => [sprite('grass-tileset', {anim: 'ml-2'}), area(), body({isStatic: true})],
    7: () => [sprite('grass-tileset', {anim: 'mm-2'})],
    8: () => [sprite('grass-tileset', {anim: 'mr-2'}), area(), body({isStatic: true})],
    9: () => [sprite('grass-oneway-tileset', {anim: 'tl'}), area({shape: new Rect(vec2(0), 16, 3)}), 'passthrough', body({isStatic: true})],
    'a': () => [sprite('grass-oneway-tileset', {anim: 'tm'}), area({shape: new Rect(vec2(0), 16, 3)}), 'passthrough', body({isStatic: true})],
    'b': () => [sprite('grass-oneway-tileset', {anim: 'tr'}), area({shape: new Rect(vec2(0), 16, 3)}), 'passthrough', body({isStatic: true})],
    'c': () => [sprite('grass-oneway-tileset', {anim: 'ml'}), area()],
    'd': () => [sprite('grass-oneway-tileset', {anim: 'mm'}), area()],
    'e': () => [sprite('grass-oneway-tileset', {anim: 'mr'}), area()],
    'v': () => [sprite('water', {anim: 'wave-reversed'})],
    'o': () => [sprite('bridge'), area(), body({isStatic: true})]
}

export const level1Layout = [
    [
        '                                                                                         ',
        '                                                                                         ',
        '                             9aab                                                        ',
        '                             cdde                                                        ',
        '                             cdde                                                        ',
        '                             cdde                                                        ',
        '                             cdde                                                        ',
        '                             cdde                                                        ',
        '                             cdde                                                        ',
        '                                                                                         ',
        '                                                                                         ',
        '                                                                                         '
    ],
    [
        '                                                                                        ',
        '                                                                                        ',
        '                                                                                        ',
        '                                                                                        ',
        '                               9aab          9aab                                       ',
        '                               cdde          cdde                          9aaaboooo9aaab',
        '                          9aab cdde          cdde 9aab               9aab  cddde    cddde',
        '                          cdde cdde          cdde cdde               cdde  cddde    cddde',
        '                          cdde cdde          cdde cdde               cdde  cddde    cddde',
        '                   011111111111111111112oo011111111111111111112oooo0111111111112    011111111112',
        '                   344444444444444444445  344444444444444444445    3444444444445    344444444445',
        '                   677777777777777777778  677777777777777777778    6777777777778    677777777778'
    ],
    [
        '                                                                                         ',
        '                                                                                         ',
        '                                                                                         ',
        '                                                                                         ',
        '                                                                                         ',
        '                                                                                         ',
        '                                                                                         ',
        '                                                                                         ',
        '                                                                                         ',
        'vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv',
        '                                                                                         ',
        '                                                                                         '
    ]
]