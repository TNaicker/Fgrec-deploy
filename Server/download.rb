(1...400).each do |i|
 fname = "%03d" % i

 `curl http://fate-go.cirnopedia.org/icons/essence_sample/craft_essence_#{fname}.png > images/craft_essence_#{fname}.png`
end
