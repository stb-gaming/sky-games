---
title: basic menu
---
[< back](/)
# Choose a game
{% for game in site.data.games %}
- [{{game.title}}]({{game.url}})
{% endfor %}
