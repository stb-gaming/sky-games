---
title: basic menu
---
[< back](/)
# Choose a game
{% for game in site.data.games %}
- [{{game.title}} ![]({{site.url}}/assets/img/games/{{game.image}})]({{game.url}})

{% endfor %}
