#!/usr/bin/env python

import webapp2
import jinja2
import os


jinja_environment = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)+ '/templates'))

class MainHandler(webapp2.RequestHandler):
    def get(self):
      template_values = {}
      template = jinja_environment.get_template('index.html')
      self.response.write(template.render(template_values))

app = webapp2.WSGIApplication([
    ('/', MainHandler)
    ], debug=True)
