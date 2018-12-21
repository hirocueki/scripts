#!/usr/bin/env ruby
require 'date'

projectName = "hirocueki"
date = Date.today
pageTitle = "#{date.year}年#{date.month.to_i}月#{date.day}日"
body = "\n##{date.year}年#{date.month.to_i}月 #memo"

system "open 'https://scrapbox.io/#{projectName}/#{pageTitle}?body=#{body}'"
