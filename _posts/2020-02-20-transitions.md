---
layout: post
title: Transition rates for important dihedrals at different temperatures
image: /img/transitions/transition_1.png
---

At temperatures 325, 320, 318 and 315 K transition rates for dihedrals O11-C1-C2-O21 (important for PC80) and C1-C2-O21-C21 (important for PC93) were calculated. The updated script that allows the transition rate calculation is [here](https://github.com/pbuslaev/scr/blob/master/calc_dihed.py). There is no significant difference there.

![](/img/diheds/dihed_26.png) ![](/img/transitions/transition_1.png)
![](/img/diheds/dihed_19.png) ![](/img/transitions/transition_2.png)

For the transition figures the limits which define the discrete states were selected (-120 0 - for C2-O21 dihedral and -120 0 120 for C1-C2 dihedral). State i corresponds to the values of dihedral angle between i+1 and i+2 values of limits for this dihedral. If i+2 is larger than the length of the lipids, than i+2 is defined as 1 (for example, state 1 for C2-O21 dihedral corresponds to angles between 0 and -120. Thus, all values that are larger than 0 or smaller than -120 are included). 

The motions that correspond to PC80 and PC93 could be found [here](https://github.com/pbuslaev/pbuslaev.github.io/tree/master/data/)
