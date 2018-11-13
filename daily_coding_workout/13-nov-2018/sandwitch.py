def make_sndwitch(knife, bread, peanutButter, jelly):
    slice1 = knife.spread(bread[0], peanutButter)
    slice2 = knife.spread(bread[1], jelly)
    sandwich = [slice1, slice2]
    return sandwich
