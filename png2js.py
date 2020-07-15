#!/usr/bin/env python3
# coding: utf-8

from PIL import Image
import numpy as np
import argparse

def rgb2gray(rgb):
  r, g, b = rgb[:,:,0], rgb[:,:,1], rgb[:,:,2]
  gray = 0.2989 * r + 0.5870 * g + 0.1140 * b
  return gray

if __name__ == "__main__":

  """ parse args """
  parser = argparse.ArgumentParser(description='')

  parser.add_argument('-i', type=str,
    required=True, help='in filename')
  parser.add_argument('-o', type=str,
    required=True, help='out filename')
  parser.add_argument('-W', type=int,
    default=None, help='out width')
  parser.add_argument('-H', type=int,
    default=None, help='out height')

  args = parser.parse_args()
  im = np.array(Image.open(args.i))
  print('reading {}, size {}'.format(args.o, im.shape))
  im = np.transpose(im, [1, 0, 2])

  # resize
  if args.H == None: args.H = im.shape[0]
  if args.W == None: args.W = im.shape[1]
  im = np.array(Image.fromarray(im).resize((args.H, args.W),Image.LANCZOS))

  with open(args.o + '.js', "w") as f:
    f.write('var {} = '.format(args.o))
    for i in range(im.shape[0]):
      f.write('{}'.format('[' if i==0 else ''))
      for j in range(im.shape[1]):
        f.write('{}'.format('[' if j==0 else ''))
        for k in range(im.shape[2]):
          f.write('{}{:3.1f}{}'.format('[' if k==0 else '', im[i][j][k], ']' if k==(im.shape[2]-1) else ', '))
        f.write('{}'.format(', ' if j!=(im.shape[1]-1) else ']'))
      f.write('{}'.format(', ' if i!=(im.shape[0]-1) else ']'))
