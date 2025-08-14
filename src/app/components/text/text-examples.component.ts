import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoabContainer, GoabText, GoabSpacer } from '@abgov/angular-components';

@Component({
  selector: 'app-text-examples',
  standalone: true,
  imports: [CommonModule, GoabContainer, GoabText, GoabSpacer],
  template: `
    <goab-container>
      <h1>Text Component Examples</h1>
      <p>Provides consistent sizing, spacing, and colour to written content.</p>
      
      <goab-spacer vSpacing="xl"></goab-spacer>
      
      <h2>Heading Examples</h2>
      <goab-text tag="h1">
        Heading XL (H1) - Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </goab-text>
      
      <goab-text tag="h2" mt="m">
        Heading L (H2) - Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </goab-text>
      
      <goab-text tag="h3" mt="m">
        Heading M (H3) - Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </goab-text>
      
      <goab-text tag="h4" mt="m">
        Heading S (H4) - Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </goab-text>
      
      <goab-text tag="h5" mt="m">
        Heading XS (H5) - Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </goab-text>

      <goab-spacer vSpacing="xl"></goab-spacer>
      
      <h2>Body Text Examples</h2>
      <goab-text tag="p" size="body-l">
        Body Large - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </goab-text>
      
      <goab-text tag="p" size="body-m" mt="m">
        Body Medium - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </goab-text>
      
      <goab-text tag="p" size="body-s" mt="m">
        Body Small - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </goab-text>
      
      <goab-text tag="p" size="body-xs" mt="m">
        Body Extra Small - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </goab-text>

      <goab-spacer vSpacing="xl"></goab-spacer>
      
      <h2>Color Examples</h2>
      <goab-text tag="p" color="primary" mb="m">
        Primary Color - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </goab-text>
      
      <goab-text tag="p" color="secondary" mb="m">
        Secondary Color - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </goab-text>

      <goab-spacer vSpacing="xl"></goab-spacer>
      
      <h2>Max Width Examples</h2>
      <goab-text tag="p" maxWidth="40ch" mb="m">
        Max Width 40ch - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </goab-text>
      
      <goab-text tag="p" maxWidth="80ch" mb="m">
        Max Width 80ch - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </goab-text>

      <goab-spacer vSpacing="xl"></goab-spacer>
      
      <h2>Margin Examples</h2>
      <goab-text tag="p" mt="xl" mb="xl">
        Extra Large Margins (XL) - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </goab-text>
      
      <goab-text tag="p" mt="l" mb="l">
        Large Margins (L) - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </goab-text>
      
      <goab-text tag="p" mt="m" mb="m">
        Medium Margins (M) - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </goab-text>
      
      <goab-text tag="p" mt="s" mb="s">
        Small Margins (S) - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </goab-text>

      <goab-spacer vSpacing="xl"></goab-spacer>
      
      <h2>Mixed Examples</h2>
      <goab-text tag="div" size="heading-m" color="primary" mb="m">
        Custom Div with Heading-M Size
      </goab-text>
      
      <goab-text tag="span" size="body-s" color="secondary">
        Inline Span with Body-S Size and Secondary Color - 
      </goab-text>
      <goab-text tag="span" size="body-s" color="primary">
        followed by Primary Color Text
      </goab-text>
      
      <goab-text tag="p" size="body-m" maxWidth="50ch" mt="m" mb="m" color="primary">
        Paragraph with custom max-width (50ch), medium body size, medium margins, and primary color. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </goab-text>
    </goab-container>
  `,
})
export class TextExamplesComponent {}