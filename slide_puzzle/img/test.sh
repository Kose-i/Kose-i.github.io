#!/bin/bash
SRC=github-profile

for i in {1..15}; do
  cp ${SRC}.png ${SRC}${i}.png
done
