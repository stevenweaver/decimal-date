# decimal-date

Accepts a date in any format and returns a decimal date like seen in BEAST or the lubridate R package. 

Use in your pipeline alongside beast, treedater, phylotree.js, etc., and realize your dreams. 💫

## Installation

`yarn global add decimal-date`

## Example command

`decimal-date 1984-09-20 -f YYYY-MM-DD`

## Example output
```
10:03:55 sweaver@home decimal-date 2017-01-20                                           
2017.0510752688172
```

## FAQ

> But Steve, I have a csv file that looks like this and I wanna convert all the dates. This tool is stupid.

```
10:17:43 sweaver@home ? head tips.csv 
BetaCoV_USA_IL2_2020_EPI_ISL_410045,2020-01-28
BetaCoV_USA_CA6_2020_EPI_ISL_410044,2020-01-27
BetaCoV_USA_MA1_2020_EPI_ISL_409067,2020-01-29
BetaCoV_Wuhan_WH05_2020_EPI_ISL_408978,2020-02-07
BetaCoV_Sydney_3_2020_EPI_ISL_408977,2020-01-25
BetaCoV_Sydney_2_2020_EPI_ISL_408976,2020-01-22
BetaCoV_Hong Kong_VM20001061_2020_EPI_ISL_408975,2020-01-22
BetaCoV_USA_WI1_2020_EPI_ISL_408670,2020-01-31
BetaCoV_Japan_KY-V-029_2020_EPI_ISL_408669,2020-01-29
BetaCoV_Vietnam_VR03-38142_2020_EPI_ISL_408668,2020-01-24
```

np, just do something like this or use whatever else.

```
for x in $(cat tips.csv); do echo -n `cut -d',' -f1 <<< $x`, >> converted.csv; decimal-date `cut -d',' -f2 <<< $x` >> converted.csv; done;
```

Made with 💝 by @stevenweaver.
