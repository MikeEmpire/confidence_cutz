#!/bin/sh
branch_name=$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')

echo -e "\e[1;36m Staging to git... \e[0m"

git add .

read -r -p "Commit Message: " commit_msg 

git commit -m "${commit_msg}"

git push origin $branch_name

echo -e "\e[1;32m Finished pushing to github! \e[0m"